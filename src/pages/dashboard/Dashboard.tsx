import { SupabaseClient, User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { PostArray } from "../../types";
import Header from "../../components/header/Header";
import styles from "./Dashboard.module.css";
import CreatePost from "../../components/create-post/CreatePost";
import Post from "../../components/post/Post";

export default function Dashboard(props: { supabase: SupabaseClient }) {
  const [, setLocation] = useLocation();
  const [posts, setPosts] = useState([] as PostArray);
  const [userData, setUserData] = useState({} as User | null);
  const [range, setRange] = useState(9);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getUserData();
    handleScroll();
  }, []);

  useEffect(() => {
    getPosts();
  }, [range, filter])

  async function getUserData() {
    const { data } = await props.supabase.auth.getUser();
    setUserData(data.user);
  }

  async function getPosts() {
    const { data: posts, error } = await props.supabase
      .from("posts")
      .select("*")
      .like('message', `%${filter}%`)
      .range(0, range)
      .order('id', { ascending: false });
    error ? console.log("error: ", error) : setPosts(posts);
    console.log(posts);
  }

  if (!props.supabase) {
    setLocation("/");
  }

  const handleScroll = () => {
    window.onscroll = function() {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
            setRange((range)=> range +10 );
        }
    }
  };

  async function createPostHandler(title: string, message: string) {
    const { error } = await props.supabase
      .from("posts")
      .insert([
        {
          created_by: userData?.email,
          creator_id: userData?.id,
          title: title,
          message: message,
        },
      ]);

    error ? console.log("error: ", error) : setPosts(posts);
    getPosts();
  }

  async function logoutHandler() {
    const logout = await props.supabase.auth.signOut();
    logout && setLocation("/");
  }

  async function deletePostHandler(id: number) {
    const { error } = await props.supabase.from("posts").delete().eq("id", id);
    error ? console.log("error: ", error) : getPosts();
  }

  return (
    <div className={styles["dashboard-container"]}>
      <Header currentUser={userData?.email} onLogout={logoutHandler}/>
      <CreatePost onCreatePost={createPostHandler} />
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            message={post.message}
            createdAt={post.created_at}
            createdBy={post.created_by}
            currentUser={userData?.email}
            onDelete={deletePostHandler}
          />
        ))}
      </div>
    </div>
  );
}

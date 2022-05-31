import React, {useState} from 'react';
import './styles/App.css';
import './bootstrap/css/bootstrap.min.css';

import Post from './components/Post';
import PostList from './components/PostList';

import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', description: 'Javascript - мова програмування'},
        {id: 2, title: 'jQuery', description: 'jQuery - бібліотека Javascript, покликана спростити процес кодингу'}
    ])

    const [post, setPost] = useState({title: '', description: ''})

    const createPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
    }

    return (
        <div className="App">
            <form className="mt-3 mb-3">
                <MyInput
                    value={post.title}
                    onChange = {e => setPost({...post, title: e.target.value})}
                    type="text"
                    className="form-control"
                    placeholder="Назва"
                />
                <MyInput
                    value={post.description}
                    onChange = {e => setPost({...post, description: e.target.value})}
                    type="text"
                    className="form-control"
                    placeholder="Опис"
                />
                <MyButton onClick={createPost} className="btn btn-primary">Створити пост</MyButton>
            </form>
            <PostList posts={posts} title="Пости про JS"/>
        </div>
    );
}

export default App;
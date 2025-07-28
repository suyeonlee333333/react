/* eslint-disable */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title1, setTitle1]=useState(0);
  let [newPost,setNewPost]=useState('');


  function titleChange() {
    let newTitle = [...title];
    newTitle[0] = '여자 코트 추천';
    setTitle(newTitle);
  }

  function orderChange() {
    let sorted = [...title];
    sorted.sort();
    setTitle(sorted);
  }

  function likeChange(i) {
    let newLike = [...like];
    newLike[i]+=1;
    setLike(newLike);
    }
  function addPost () {
    // let newpost=[...title];
    // newpost[i+1]=newPost;
    setTitle([...title,newPost]);
    setNewPost('');
  }
  function deletePost (i) {
    let deletepost= title.filter((_, index) => index !== i);
    setTitle(deletepost);

  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <button onClick={titleChange}> 제목바꾸기 </button>
      <button onClick={orderChange}>가나다순 정렬</button>

      {/* <div className="list">
          <h4>{title[0]} <span onClick={() => { setLike(like+1) }}>👍</span>{like}</h4>
          <p>2월 17일 발행</p>
        </div>

        <div className="list">
          <h4>{title[1]}</h4>
          <p>2월 17일 발행</p>
        </div>

        <div className="list">
          <h4 onClick={()=>{ setModal(!modal)}}>{title[2]}</h4>
          {
            modal == true ? <Modal/> : null
          }
          <p>2월 17일 발행</p>
        </div> */}
      {
        title.map(function (a, i) {
          return (
          <div className="list" key={i}>
            <h4 onClick={()=>{ setModal(!modal); setTitle1(i)}}>{title[i]}
              <span onClick={(e)=> { e.stopPropagation(); likeChange(i) }}>👍</span>
              {like[i]}
            </h4>
            <p>2월 17일 발행
              <button onClick={()=>{
                deletePost(i);
              }}>삭제</button>
            </p>
          </div>
          )
        }
        
      )
    }
    <input onChange = {(e) => { setNewPost(e.target.value)} }/>
      <button onClick={(e)=>{
        {newPost.trim() != '' ? addPost():null};
      }
      }>발행</button>
    
    {
      modal == true ? <Modal title={title} index={title1} color={'skyblue'} /> : null
    }
  </div>
  )
  
}
    
function Modal(props) {
  return (
    <div className="modal" style={{background: props.color}}>
      <h4>
        {props.title[props.index]}
      </h4>

      <p>상세내용</p>
      <button>글수정</button>
      
    </div>
  )
}

class MAdal2 extends React.Component {
  constructor () {
    super ();
    this.state= {
      name : 'lee',
      age : 21
    }
  }
  render () {
    return (
      <div>으아아아.... 저는 {this.state}</div>
    )
  }
}

export default App

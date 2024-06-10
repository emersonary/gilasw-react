import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { MessageLog } from './components/MessageLog';

import './global.css'

import styles from './App.module.css'



export function App() {

  const [getOptions, setOptions] = useState([]);
  const [getMessages, setMessages] = useState([]);

  const [getData, setData] = useState({
    selectValue: '',
    textareaValue: '',
  });

  useEffect(() => {

    const fetchOptions = async () => {
      try {
        const response = await axios.get('http://154.53.38.236:8000/categories/');
        setOptions(response.data);
      } catch (error) {
        console.error('Error fetching message log:', error);
      }
    };

    const fetchMessageLog = async () => {
      try {
        const response = await axios.get('http://154.53.38.236:8000/messages/lastmessages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
    fetchMessageLog();

  }, []);

  async function handlesendmessage(e) {
    e.preventDefault();
    const { selectValue, textareaValue } = getData

    if (selectValue == "") {
      alert("A category must be selected!")
      return
    }

    if (textareaValue.trim() == "") {
      alert("Message cannot be empty!")
      return
    };

    if (textareaValue.length > 300) {
      alert("Message cannot have more than 300 characters!")
      return
    };

    try {
      const response = await axios.post('http://154.53.38.236:8000/messages/create', { categoryid: selectValue, messagetext: textareaValue.trim() });
      const { id, category, messagetext, createdat } = response.data;
      setMessages([{ id, category: category.name, messagetext, createdat }, ...getMessages].slice(0, 9))
      setData({
        selectValue: '',
        textareaValue: '',
      })
    } catch (error) {
      console.error('Error creating message:', error);
    }

  }

  function handlechangetext(e) {

    setData((pvData) => ({
      ...pvData,
      textareaValue: e.target.value,
    }))


  }

  function handlechangecategory(e) {

    setData((pvData) => ({
      ...pvData,
      selectValue: e.target.value,
    }))


  }

  return (
    <div>

      <Header />
      <main className={styles.main}>
        <Post
          currentstate={getData}
          options={getOptions}
          submitfunc={handlesendmessage}
          changedtext={handlechangetext}
          changedcategory={handlechangecategory} />
        {getMessages.length != 0 && <MessageLog messages={getMessages} />}
      </main>

    </div>
  )
}

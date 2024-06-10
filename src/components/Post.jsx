import styles from './Post.module.css'

export function Post(props) {
  return (

    <form className={styles.message}>
      <div className={styles.flexitem1}>
        <strong>Send message to category:</strong>
        <select onChange={props.changedcategory} value={props.currentstate.selectValue}>
          <option value="">--Choose a category--</option>
          {props.options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.flexitem2}>
        <textarea placeholder="Write a message here" onChange={props.changedtext} value={props.currentstate.textareaValue}></textarea>
      </div>
      <div className={styles.flexitem3}>
        <button type="submit" onClick={props.submitfunc}>Send Message</button>
      </div>
    </form>
 

  )
}
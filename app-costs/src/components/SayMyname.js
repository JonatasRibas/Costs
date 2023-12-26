import styles from './SayMyName.module.css'

function SayMyName(props) {
  return (
    <div>
      <p className={styles.frase}>Fala aí {props.nome}, tudo bem com você?</p>
    </div>
  )
}

export default SayMyName

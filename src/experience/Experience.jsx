import s from './Experience.module.css';

export const Experience = (props) => {

  const {experienceTitle} = props.currentState
  const {frontend, customs} = props.currentState.experience

  return (
    <section className={s.experience}>
      <h2>{experienceTitle}</h2>
      <div className={s.experienceWrap}>
        <div className={s.frontendBlock}>
          <div className={s.frontendBlockTitle}>
            <h3>{frontend.position}</h3>
            <h4>{frontend.places}</h4>
          </div>
          <data><strong>{frontend.dateTitle}: </strong> {frontend.date}</data>
          <ul className={s.frontentBlockWorks}>
            {frontend.work.map((el,i) => (<li key={i}>{el}</li>))}
          </ul>
        </div>
        <div className={s.customsBlock}>
          <h3>{customs.position}</h3>
          {customs.positionsArray.map((el,i) => (
            <div className={s.customsBlockItem} key={i}>
              <h4>{el.subPosition}</h4>
              <p>{el.places}</p>
            </div>
          ))}
          <data><strong>{customs.dateTitle}: </strong>{customs.date}</data>
          <ul className={s.customsBlockWorks}>
            {customs.work.map((el,i) => (<li key={i}>{el}</li>))}
          </ul>
        </div>
      </div>
    </section>
  )
}
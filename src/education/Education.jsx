import s from './Education.module.css';

export const Education = (props) => {

  const {educationTitle, education, skillsTitle} = props.currentState

  return (
    <section className={s.education}>
      <h2>{educationTitle}</h2>
      <div className={s.educationList}>
        {education.map((el, i) => (
          <div className={s.educationItem} key={i}>
            <div className={s.educationListItemTitle}>
              <h3>{el.places} </h3>
              <p>{el.position}</p>
            </div>
            <a className={s.educationListItemLink} href={el.site}>{el.site}</a>
            <data className={s.educationListItemData}><strong>{el.dateTitle}:</strong> {el.date}</data>
            {el.skills && <h4>{skillsTitle}:</h4>}
            <ul className={s.educationListItemSkills}>              {
              el.skills?.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))
            }
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
};
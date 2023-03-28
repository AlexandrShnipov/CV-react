import s from './Contacts.module.css'
import {Fragment} from 'react';
import {stateEng as state} from '../state/stateEng';
export const Contacts = () => {
  return (
    <ul className={s.contactsList}>
      <li className={s.contactsListItem}>
        <a className={s.contactsListItemLink} type='tel' href={state.contacts.tel.link} >
          <img className={`${s.contactsListItemIcon} ${s.iconsTel}`} src={state.contacts.tel.img} alt={`link for ${state.contacts.tel.text}`}/>
          <span>{state.contacts.tel.text}</span>
        </a>
      </li>

      {state.contacts.socials.map((el,i) => {
          return (
            <Fragment key={i}>
              <li className={`${s.contactsListItem} ${s.contactsListItemIcons}`}>
                <a className={s.contactsListItemLink} href={el.link}>
                  <img className={s.contactsListItemIcon} src={el.img} alt={`link for ${el.img}`}/>
                </a>
              </li>
            </Fragment>
          );
        }
      )
      }
    </ul>
  )
}
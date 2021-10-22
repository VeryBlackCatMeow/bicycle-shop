import React, {useState, useEffect} from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Container } from 'reactstrap';

import {setUserAction} from '../actions/index.js'
import '../styles/profile.scss';

const Profile = () => {
    const [edit, setEdit] = useState(null);
    const [userDuplicate, setDuplicate] = useState({});
    const [options] = useState([ {line: 'Orders', fav: 'fas fa-list-alt'},
        {line: 'Wishlist', fav: 'far fa-heart'}, {line: 'Messages', fav: 'far fa-envelope'},
        {line: 'Comments', fav: 'far fa-comment'}, {line: 'Reviews', fav: 'far fa-comment-alt'},
        {line: 'Security', fav: 'fas fa-lock'}, {line: 'Gift Cards', fav: 'fas fa-gift'},
    ])
    const {isLoggedIn, user} = useSelector( state => state.userreducers);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!isLoggedIn) history.replace('/');
        if(isLoggedIn && user) setDuplicate(user);
    }, [user, isLoggedIn, history])

    const { name, surname, age, sex, phone, email,
        home, post, additionalPhone, visa, masterCard, payPal, bitCoin, aboutMe } = userDuplicate;

    //Sections:
    const personal = {name, surname, age, sex};
    const contacts = {phone, email, additionalPhone};
    const adress = {home, post};
    const payments = {visa, masterCard, payPal, bitCoin };
    const about = {aboutMe}

    //Object of Sections:
    const sections = {
        personal,contacts,adress, payments, about
    }

    const handleInput = ({ target: {name, value} }) => {
        setDuplicate({...userDuplicate, [name]: value });
    }

    const saveChanges = () => {
        localStorage.account = JSON.stringify(userDuplicate);
        dispatch(setUserAction(userDuplicate));
        setEdit(null);
    }

    return(
        <Container className="profile">

    {/*Options*/}
            <div className="user-options section">
                <ul className="options-list">
                    {
                        options.map((item, index)=> (
                            <li className="options-item" key={index}>                                
                                <i className={item.fav}></i> 
                                {item.line}
                            </li>
                        ))
                    }
               </ul>
            </div>

    {/*Photo*/}
            <div className="user-photo section">
                <img src="/database/another/z2.jpg" alt="user" />
                <div className="overlay">
                    <div className="overlay-text">
                        Load Photo
                    </div>
                    <div className="overlay-text">
                        Remove Photo
                    </div>
                </div>
                
            </div>

    {/*Personal Information, Contacts, Adress, Payments, About */ }
            {
                Object.keys(sections).map((sectionName) => (
                    <div className={`user-${sectionName} section`} key={sectionName}>

                        <div className="section-header">
                            <span>{sectionName}</span>
                            <span> 
                                    {
                                        edit!==sectionName
                                        ?
                                        <button onClick = {()=> setEdit(sectionName)}>
                                            <i className="far fa-edit" ></i>
                                        </button>
                                        : 
                                        <button onClick={()=> saveChanges()}
                                            >Save
                                            <i className="far fa-save"></i>
                                        </button>
                                    }
                            </span>
                        </div>
                        <hr/>
        
                        <div className="section-data">
                            {
                                Object.entries(sections[sectionName]).map((data)=> (
                                    <div className="data-item" key={data[0]}>
                                        <div className="data-label">{data[0]}</div>
                                        {
                                            edit!==sectionName
                                            ?
                                            <div className="data-value">{data[1] || 'Not Specified'}</div>
                                            :
                                            <div className="data-input">
                                                {
                                                    sectionName==='about'
                                                    ?
                                                    <textarea name={data[0]} value={data[1]} onChange={handleInput}
                                                        cols="110" ></textarea>    
                                                    :
                                                    <input type="text" name={data[0]} value={data[1]} onChange={handleInput}/>
                                                }
                                                
                                            </div>
                                        }
                                    </div>
                                ))    
                            }
                        </div>
                    </div>
                    ))
            }
        </Container>        
    )
}

export default Profile;
import {useEffect, useState, useRef} from 'react'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Register = () => { 
    
    const userRef = useRef()


    const [user, seUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [nameFocus, setNameFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [pwdMatch, setPwdMatch] = useState('')
    const [validPwdMatch, setValidPwdMatch] = useState(false)
    const [pwdMatchFocus, setPwdMatchFocus] = useState(false)

    const [errMsg,setErrMsg] = useState()

    useEffect(()=>{
        userRef.current.focus()
    }, [])

    useEffect(()=>{
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(()=>{
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(pwd)
        const match = pwd === pwdMatch
        setPwdMatch(match)
    }, [ pwd, pwdMatch])

    useEffect(()=>{
        setErrMsg('')
    }, [user, pwd, pwdMatch])
    return(
        <section>
            <p ref={errMsg} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive" >{errMsg}</p>
            <h1>Register</h1>
            
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text"id="username"/>

                <label>Password:</label>
                <input type="password"/>

                <label>Confirm Password:</label>
                <input type="password"/>

                <button>Sign Up</button>
            </form>
        </section>
    )
}
import React, { useState } from "react"
/**form to signing up a new user
 * 
 * Props:
 * -signup: fn called in parent
 * 
 * State:
 * -formData
 */
function SignupForm ({signup}) {
    const [formData, setFormData] = useState({})


    return (
        <p>sign up form</p>
    )

}

export default SignupForm;
import React, { useState } from "react"
/**form for updating existing user info
 * 
 * Context:
 * -{user}: like {username, firstName, lastName, email}
 * Props:
 * -updateProfe: fn called in parent
 * 
 * State:
 * -formData
 */
function ProfileForm ({updateProfile}) {
    const [formData, setFormData] = useState({})


    return (
        <p>profile form</p>
    )

}

export default ProfileForm
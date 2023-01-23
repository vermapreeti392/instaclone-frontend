import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./form.css"
import FileBase64 from 'react-file-base64';

const Form = () => {

    const [form, setForm] = useState({ postImage: "", author: "", location: "", description: "" })
    const navigate = useNavigate()
    
    const isAllInputsValied = form.postImage.length && form.author.length && form.location.length && form.description.length
    const [isValid, setIsValied] = useState(false)

    const handlePost = (e) => {
        e.preventDefault()



        if (isAllInputsValied === 0) {
            setIsValied(true)
        }
        else setIsValied(false)
        console.log(form);

        axios.post("https://instagram-clone-e6uf.onrender.com/api/v1/posts/addpost", {
            postImage:form.postImage.base64,
            author:form.author,
            location:form.location,
            description:form.description
        })
        .then(() => navigate("/postview"))
            
            

    }
    return (
        <>
            <section className="form-container">

                <form className="form" action="/addpost" method="post" onSubmit={handlePost}>

                    <article className="form-file-upload">
                        
                        <FileBase64
                            multiple={false}
                            onDone={(base64) => setForm({ ...form, postImage: base64 })} />
                       
                    </article>


                    <article className="form-details-1">
                        <input type="text" name="author" placeholder="  Author" onChange={(e) => setForm({ ...form, author: e.target.value })} value={form.author} />
                        
                        <input type="text" name="location" placeholder="  Location" onChange={(e) => setForm({ ...form, location: e.target.value })} value={form.location} />
                        
                    </article>



                    <article className="form-details-2">
                        <input type="text" name="description" placeholder="  Description" onChange={(e) => setForm({ ...form, description: e.target.value })} value={form.description} />
                        
                    </article>
                    {
                        isValid &&
                        <div style={{ color: "red", marginTop: "-10px" }}>All fields are mandatory</div>
                    }

                    <article className="post-button">
                        <button >Post</button>
                    </article>

                </form>

            </section>
        </>
    )
}

export default Form;
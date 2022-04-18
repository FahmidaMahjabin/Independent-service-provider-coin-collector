import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-success text-center mb-5'>Blogs</h1>
            <div>
                <div>
                    <h3>Difference Between Authentication and Authorization</h3>
                    <p>
                        Authentication is the process of verifying who someone is. whereas authorization is the process of verifying what specific applications, files, and data a user has access to. When a user has to log in using email, password or any third party like google facebook it's called authentication.
                        Where authorization is some people are admin they have the power to add, delete other users while user doesn't have that power.
                    </p>
                </div>
                <hr></hr>
                <div className='my-5'>
                    <h3>Other Services of Firebase</h3>
                    <p>We use the Authentication of firebase. Firebase also have other services. Such as:
                        <li>Hosting</li>
                        <li>Cloud firestore</li>
                        <li>A/B testing</li>
                        <li>Cloud Functions</li>
                        <li>Cloud Storage</li>

                    </p>
                </div>
                <hr></hr>
                <div>
                    <h3>Different ways of Authentication</h3>
                    <p>
                        I am using firebase authentication because it's easy to use. It also has some build-in hooks library  which makes it more easy to use. Firebase provides any type of authentication such as email-password, google, github etc. 
                    </p>
                    <ul>
                        <li>Cookie-Based authentication</li>
                        <li>Token-Based authentication</li>
                        <li>Third party access(OAuth, API-token)</li>
                        <li>OpenId</li>
                        <li>SAM</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
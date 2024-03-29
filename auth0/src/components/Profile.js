import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <article className='column'>
               <button
               type="button"
               onClick={(e) => { e.preventDefault();
               window.location.href='https://effulgent-treacle-831001.netlify.app/';
               }}
               > Continue</button>
            </article>
        )
    )
}

export default Profile

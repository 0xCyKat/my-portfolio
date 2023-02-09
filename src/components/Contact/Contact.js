import "./Contact.scss"
import {ToastsContainer, ToastsStore} from 'react-toasts';

export default function Contact() {
  const handleSUbmit = (e) => {
    e.preventDefault(); 
    ToastsStore.success("Thanks for your Message!")
  }
  return (
    <div className='contact' id='contact'>
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>

        <div className="right">
          <h2>Contact</h2>

          <form onSubmit={handleSUbmit}>
            <input type="text" placeholder='Email' />
            <textarea placeholder='Message'></textarea>
            <button>Send</button>
            <ToastsContainer store={ToastsStore}/>
          </form>

        </div>
    </div>
  );
}

import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import toast from 'react-hot-toast';


const Home = () => {

    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = v4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('RoomId & Username is required');
            return;
        }
        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

  return (
    <div className="homePageWrapper">
        <div className="formWrapper">
            <div className='headGroup'>
                <img
                    className="homePageLogo"
                    src="/code-sync.png"
                    alt="code-sync-logo"
                />
                <button className="btn joinBtn" onClick={createNewRoom}>
                        Create New Room
                </button>
            </div>
            <h4 className="mainLabel">Paste invitation ROOM ID</h4>
            <div className="inputGroup">
                <input
                    type="text"
                    className="inputBox"
                    placeholder="ROOM ID"
                    onChange={(e) => setRoomId(e.target.value)}
                    value={roomId}
                    onKeyUp={handleInputEnter}
                />
                <input
                    type="text"
                    className="inputBox"
                    placeholder="USERNAME"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    onKeyUp={handleInputEnter}
                />
                <button className="btn joinBtn" onClick={joinRoom}>
                    Join
                </button>
                {/* <span className="createInfo">
                    If you don't have an invite then create &nbsp;
                    <span className="createNewBtn">
                        new room
                    </span>
                </span> */}
            </div>
        </div>
        <footer>
            <h4>
                Built with 💛 &nbsp; by &nbsp;
                <a href="https://github.com/snehel4510">Snehel4510</a>
            </h4>
        </footer>
    </div>
  )
}

export default Home
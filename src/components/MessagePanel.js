import { useParams } from 'react-router-dom';
import './MessagePanel.css';
export default function MessagePanel() {
    const URL = useParams();
    return (
        <div className='MessagePannel'>
            {
                URL.id ? (
                    <div className='ChatRoom'>{URL.id}</div>
                ) : (
                    <div className='SelectRoom'>
                        Select a message
                        Choose from your existing conversations, start a new one, or just keep swimming.
                    </div>
                )
            }
        </div>
    )
}

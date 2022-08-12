import { useParams } from 'react-router-dom';
import './MessagePanel.css';
import PageHeader from './PageHeader';
import TweetOptions from './TweetOptions';
import TypeMsg from './TypeMsg';
export default function MessagePanel() {
    const URL = useParams();
    console.log(URL);
    return (
        <div className='MessagePannel'>
            {
                URL.id ? (
                    <div className='ChatRoom'>{URL.id}</div>

                ) : (
                    <div className='SelectRoom'>
                        {/* Select a message
                        Choose from your existing conversations, start a new one, or just keep swimming. */}
                        <PageHeader/>
                            <TypeMsg />
                            {/* <TweetOptions/> */}
                    </div>
                )
            }
        </div>
    )
}
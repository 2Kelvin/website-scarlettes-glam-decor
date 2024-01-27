import './ReusableFeedbackCard.css';

export default function ReusableFeedbackCard({ customerName, year, customerColor, theReview }) {
    const firstNameLetter = customerName[0].toUpperCase();

    return (
        <div className='feedbackCard'>
            <div className='feedbackHeader'>
                <div className='customerImage' style={{ backgroundColor: customerColor }}>
                    {firstNameLetter}
                </div>
                <div className='customerNameYear'>
                    <p>{customerName}</p>
                    <p>{year}</p>
                </div>
            </div>
            <p>{theReview}</p>
        </div>
    );
}
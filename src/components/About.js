import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const[btntext,setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = () => {
        if (myStyle.color === 'black') { 
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid blue'
            })
            setBtnText("Enable Light Mode")
        }
        else { 
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }


    return (
        <div className="container" style={myStyle}>
            <h2 className="my-3">About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>   Analyze your text    </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Textutils give you a way to analyse your text quickly and efficiently be it word count character count for anything.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong> Free to use  </strong>                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Textutil is a free character counter tool that provides instant character count in word on the statistics for a given text.Textutil report the number of words and characters.Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong> Browser compatibility </strong>                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browser such as Chrome,Firefox,InternetExplorer,Safari,Opera. It suits to count character and Facebook,blogs,books,Excel document,PDF,document,Essay etc.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-1">
                <button onClick= {toggleStyle} type="button" className="btn btn-success">{btntext}</button>
            </div>

        </div>
    )
}

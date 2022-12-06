
import * as React from "react";

function AvatarIcon() {
    let dataSource = [
        { src: './images/monvie-logo.png', size: 'e-avatar-xsmall' },
        { src: './images/monvie-logo.pngg', size: 'e-avatar-small' },
        { src: './images/monvie-logo.png', size: 'e-avatar' },
        { src: './images/monvie-logo.png', size: 'e-avatar-large' },
        { src: './images/monvie-logo.png', size: 'e-avatar-xlarge' }
    ];
    return (<div className='control-pane'>
            <div className="sample_container avatar-badge">
                <div className="avatar-block">
                    <div className="e-card e-avatar-showcase">
                        <div className="e-card-content">
                            {dataSource.map(function (item) {
        return (<div className={`e-avatar e-avatar-circle ${item.size}`} style={{ backgroundImage: `url(${item.src})` }}></div>);
    })}
                        </div>
                        <div className="e-card-content">
                            <div>Using <code>background-image</code> property</div>
                        </div>
                    </div>
                </div>

                <div className="circleAvatar avatar-block">
                    <div className="e-card e-avatar-showcase">
                        <div className="e-card-content">
                            {dataSource.map(function (item) {
        return (<div className={`e-avatar e-avatar-circle ${item.size}`}>
                                    <img src={item.src}/>
                                </div>);
    })}
                        </div>
                        <div className="e-card-content">
                            <div>Using <code>img</code> tag</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default AvatarIcon;
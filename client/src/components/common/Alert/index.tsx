import React, {CSSProperties} from 'react';
import {AlertComponentProps} from "react-alert";

const Types = {
    info: 'info',
    error: 'danger',
    success: 'success'
}

export const Alert: React.FC<AlertComponentProps> = ({
                                                         options, message,
                                                         close
                                                     }) => {

    return (
        <div className={`alert alert-${(options.type && Types[options.type]) || "info"} alert-dismissible fade show`}
             role="alert">
            <button type="button" className="close" data-dismiss="alert" onClick={close}>&times;</button>
            {message}
        </div>
    )
}
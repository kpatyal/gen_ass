import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const User = function(props) {
    return (
        <div className="row user-search">
            <form action='' className='docs-TextFieldExample'>
	            <div className="col-sm-8">
		            <TextField
		              name='example'
		              placeholder='Enter UserID'
		              onChanged={(data) => props.updateUserID(data)}
		            />
		        </div>
		        <div className="col-sm-4">
                    <PrimaryButton type='submit' onClick={(e) => props.getUserData(e)}>Submit</PrimaryButton>
                </div>
            </form>
        </div>
    );
}

export default User;


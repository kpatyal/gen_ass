import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import ProgressRing from "react-uwp/ProgressRing";
import Button from "react-uwp/Button";
import {getUser} from '../actions/userAction';
import UserCard from './UserCard';
import TextBox from "react-uwp/TextBox";

const buttonBaseStyle: React.CSSProperties = {
      margin: "10px 10px 10px 0"
    };
const baseStyle: React.CSSProperties = {
  margin: "10px 0"
};
class User extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userID: ""
    }
  }

  fetchUserData(e){
    e.preventDefault()
    this.props.getUser(this.state.userID)
  }
  render() {
  	console.log('=====users', this.props);
    return (
        <div className="row user-search">
            <form action='' className='docs-TextFieldExample'>
	            <div className="col-sm-8">
	                <TextBox
			          style={baseStyle}
			          placeholder="Enter UserID"
			          onChangeValue = {(data) => this.setState({userID: data})}
			        />     
		        </div>
		        <div className="col-sm-4">
		          <Button style={buttonBaseStyle} onClick={(e) => this.fetchUserData(e)} background="#0078D7">
                    Submit
                  </Button>
                  {/*<PrimaryButton type='submit' onClick={(e) => props.getUserData(e)}>Submit</PrimaryButton>*/}
                </div>
            </form>

            {this.props.user.loading && (
              <ProgressRing size={75} dotsNumber={4} />
            )}
           {this.props.user.noUser && (
              <p>No user exits.!!</p>
            )}     
          {!this.props.user.loading && !this.props.user.noUser && this.props.user.id && (
            <UserCard user={this.props.user} />
          )}
        </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUser: getUser,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
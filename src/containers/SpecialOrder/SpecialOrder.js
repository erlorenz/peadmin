import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import SpecialOrderInfo from './SpecialOrderInfo';
import SpecialOrderComments from './SpecialOrderComments';
import SpecialOrderEdits from './SpecialOrderEdits';
import styles from './SpecialOrder.module.scss';

class SpecialOrder extends Component {
  state = {
    order: {},
    id: this.props.match.params.id,
    status: '',
    adminComment: '',
    comments: [],
    username: this.props.userName,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`/admin/specialOrder/${this.state.id}`);
      this.setState({
        order: response.data,
        error: false,
        comments: response.data.adminComments,
      });
    } catch (e) {
      this.setState({ error: true });
      console.log(e.response.data.message);
    }
  }

  statusChangeHandler = async () => {
    if (this.state.status) {
      try {
        const response = await axios.put(
          `/admin/specialOrder/${this.state.id}/status`,
          {
            status: this.state.status,
          },
        );
        this.setState({
          order: response.data,
          error: false,
          comments: response.data.adminComments,
          status: '',
          adminComment: '',
        });
        console.log(response.data);
      } catch (e) {
        console.log(e.response.data);
      }
    } else {
      alert('No status updated!!');
    }
  };

  commentAddHandler = async () => {
    if (this.state.adminComment) {
      try {
        const response = await axios.put(
          `/admin/specialOrder/${this.state.id}/comments`,
          {
            comment: this.state.adminComment,
            user: this.state.username,
          },
        );
        this.setState({
          order: response.data,
          error: false,
          comments: response.data.adminComments,
          adminComment: '',
          status: '',
        });
      } catch (e) {
        alert(e.response.data);
      }
    } else {
      alert('No comment added!!');
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { order, id, comments, adminComment, status } = this.state;

    if (this.state.error) {
      return <h1>Error retrieving data, please log out and try again</h1>;
    }

    const title = `${id} - ${order.status}`;

    return (
      <Fragment>
        <div className={styles.title}>
          <p>{order.status && id ? title.toUpperCase() : null}</p>
        </div>

        <SpecialOrderInfo order={order} styles={styles} />
        <SpecialOrderComments comments={comments} styles={styles} />
        <SpecialOrderEdits
          adminCommentValue={adminComment}
          statusValue={status}
          changed={this.changeHandler}
          commentClicked={this.commentAddHandler}
          statusClicked={this.statusChangeHandler}
          styles={styles}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth.user, userName: state.auth.userName };
};
export default connect(mapStateToProps)(SpecialOrder);

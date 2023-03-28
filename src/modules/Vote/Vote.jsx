import { Component } from "react";

import VoteActions from "./VoteActions/VoteActions";
import VoteResult from "./VoteResult/VoteResult";

import styles from "./vote.module.scss"

class Vote extends Component {
    state = { 
        republicans: 0,
        democrats: 0,
    }


    calcTotal() {
        const { republicans, democrats } = this.state;
        const total = republicans + democrats;
        return total;

    }

    calcPercent(propName) {
        const value = this.state[propName];

        const total = this.calcTotal();
        if (!total) {
            return 0;
        }
        const percent = Math.round((value / total) * 100);
        return percent;
    }

    leaveVote = (propName) => {
        this.setState(prevState => {
           
            return {
                [propName]: prevState[propName] + 1
            }
        })
    }



    render() {
        const total = this.calcTotal();

        const republicansPercent = this.calcPercent("republicans");
        const democratsPercent = this.calcPercent("democrats");

        return (
            <div className={styles.wrapper}>
                <VoteActions leaveVote={this.leaveVote} />
                <VoteResult total={total} republicansPercent={republicansPercent} democratsPercent={democratsPercent} />
            </div>
        )
    }

}

export default Vote;
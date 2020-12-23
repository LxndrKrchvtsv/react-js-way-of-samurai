import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import Style from "./Users.module.css";

let Users = ({currentPage, totalUserCount, pageSize, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUserCount}
                       pageSize={pageSize}/>
            <div className={Style.usersWrapper}>
                {
                    users.map(u => <User user={u}
                                         followingInProgress={props.followingInProgress}
                                         follow={props.follow}
                                         unfollow={props.unfollow}
                                         key={u.id}/>
                    )
                }
            </div>
        </div>)
}

export default Users;
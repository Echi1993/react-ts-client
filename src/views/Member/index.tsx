import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import avatar from '@img/avatar.png';


export interface IState {
    member: any;
    followNum: number;
    fansNum: number;
    accountInfo: any;
}

class Member extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            member: {},
            followNum: 0,
            fansNum: 0,
            accountInfo: {}
        }
    }

    render() {
        return (
            <div className="member-center">
                <div className="member-block">
                    <Link to="/memberInfo">
                        <div className="personal-info">
                            <div className="in-flex-common">
                                <img src={this.state.member.avatar || avatar} className="avatar" />
                                    <div className="info">
                                    <div className="fs-20 fw-bold">{ this.state.member.nick_name || '请设置昵称' }</div>
                                    <div className="fs-11">
                                        <span>鞋码{ this.state.member.shoe_size }</span>
                                        <span className="dot">•</span>
                                        <span>座位高度{ this.state.member.seat_height }</span>
                                    </div>
                                </div>
                            </div>
                            <i className="iconfont">&#xe660;</i>
                        </div>
                    </Link>
                    <div className="social-info">
                        <Link to="/follow">
                            <div>{this.state.followNum }</div>
                            <div>关注</div>
                        </Link>
                        <div>
                            <div>{this.state.fansNum }</div>
                            <div>粉丝</div>
                        </div>
                    </div>
                </div>
                <div className="link-list">
                    <div className="link-group">
                        <div className="link">
                            <span className="fs-13 ">
                                <i className="iconfont">&#xe66f;</i>
                                账户余额
                            </span>
                            <span className="fs-12 c-aaa">
                                { this.state.accountInfo.balance }
                                <i className="iconfont">&#xe660;</i>
                            </span>
                        </div>
                        <Link className="link" to="transactionQuota" v-show="member.show_quota">
                            <span className="fs-13 ">
                                <i className="iconfont">&#xe6b6;</i>
                                套餐剩余次数
                            </span>
                            <span className="fs-12 c-aaa">
                                { this.state.accountInfo.quota }
                                <i className="iconfont">&#xe660;</i>
                            </span>
                    </Link>
                    <Link className="link" to="/trainRecordList">
                        <span className="fs-13">
                            <i className="iconfont">&#xe670;</i>
                            训练记录
                        </span>
                        <span className="fs-12 c-aaa">
                            <i className="iconfont">&#xe660;</i>
                        </span>
                    </Link>
                </div>
                <div className="link-group">
                    <Link className="link" to="/joinUs">
                        <span className="fs-13">
                            <i className="iconfont">&#xe6c1;</i>
                            加入Oncycle
                        </span>
                        <span className="fs-12 c-aaa">
                            <i className="iconfont">&#xe660;</i>
                        </span>
                    </Link>
                    <Link className="link" to="/questions">
                        <span className="fs-13">
                            <i className="iconfont">&#xe6c2;</i>
                            常见问题
                        </span>
                        <span className="fs-12 c-aaa">
                            <i className="iconfont">&#xe660;</i>
                        </span>
                    </Link>
                    <Link className="link" to="/serviceTerms">
                        <span className="fs-13">
                            <i className="iconfont">&#xe6c4;</i>
                            服务条款
                        </span>
                        <span className="fs-12 c-aaa">
                            <i className="iconfont">&#xe660;</i>
                        </span>
                    </Link>
                    <Link className="link" to="/contactUs">
                        <span className="fs-13">
                            <i className="iconfont">&#xe6c3;</i>
                            联系我们
                        </span>
                        <span className="fs-12 c-aaa">
                            <i className="iconfont">&#xe660;</i>
                        </span>
                    </Link>
                </div>
            </div>
                {/* 底部固定页 */}
                {/* <bottomBar></bottomBar> */}
            </div >
        )
    }
}

export default Member;
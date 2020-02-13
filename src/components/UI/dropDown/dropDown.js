import React, { Children } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'



const dropDown = (props) => {

    const a = (a) => {
        console.log(a);
    }

    return (
        <div>
            <DropdownButton id="dropdown-place-button" title={props.title} style={{ marginBottom: '1em', float: 'left' }}>
                <Dropdown.Item href="#/place-1" onClick={props.test}>基隆市</Dropdown.Item>
                <Dropdown.Item href="#/place-2">台北市</Dropdown.Item>
                <Dropdown.Item href="#/place-3">新北市</Dropdown.Item>
                <Dropdown.Item href="#/place-4">桃園縣</Dropdown.Item>
                <Dropdown.Item href="#/place-5">新竹市</Dropdown.Item>
                <Dropdown.Item href="#/place-6">新竹縣</Dropdown.Item>
                <Dropdown.Item href="#/place-7">苗栗縣</Dropdown.Item>
                <Dropdown.Item href="#/place-8">台中市</Dropdown.Item>
                <Dropdown.Item href="#/place-9">彰化縣</Dropdown.Item>
                <Dropdown.Item href="#/place-10">南投縣</Dropdown.Item>
                <Dropdown.Item href="#/place-11">雲林縣</Dropdown.Item>
                <Dropdown.Item href="#/place-12">嘉義市</Dropdown.Item>
                <Dropdown.Item href="#/place-13">嘉義縣</Dropdown.Item>
                <Dropdown.Item href="#/place-14">台南市</Dropdown.Item>
                <Dropdown.Item href="#/place-15">高雄市</Dropdown.Item>
                <Dropdown.Item href="#/place-16">屏東縣</Dropdown.Item>
                <Dropdown.Item href="#/place-17">台東縣</Dropdown.Item>
                <Dropdown.Item href="#/place-18">花蓮縣</Dropdown.Item>
                <Dropdown.Item href="#/place-19">宜蘭縣</Dropdown.Item>
                <Dropdown.Item href="#/place-20">澎湖縣</Dropdown.Item>
                <Dropdown.Item href="#/place-21">金門縣</Dropdown.Item>
                <Dropdown.Item href="#/place-22">連江縣</Dropdown.Item>
            </DropdownButton>
        </div>

    )

}

export default dropDown;
"use client"
import React from 'react'

import Image from 'next/image'

import {data1,data2,data3,data4, data5,data6} from '../data/indusdata'
import Card from '../components/Card'
function Industry() {
  return (
    <>
    <br />
    <h2 className="text-4xl text-center underline "> Industries we Impact</h2> <br />
    <div className='container justify-center mx-auto flex px-5 py-7 md:flex-row  flex-col items-center'>
    {
        data1.map( (item) =>
        {
            
            return (
                <div className='mx-3'>
                    <Card images = {item.images} title = {item.title} description = {item.description} />
                 </div>
            )
        } )
      } 
    </div> <br />

    <div className='container justify-center mx-auto flex px-5 py-7 md:flex-row  flex-col items-center'>
    {
        data2.map( (item) =>
        {
            
            return (
                <div className='mx-3'>
                    <Card images = {item.images} title = {item.title} description = {item.description} />
                 </div>
            )
        } )
      } 
    </div> <br />

    <div className='container justify-center mx-auto flex px-5 py-7 md:flex-row  flex-col items-center'>
    {
        data3.map( (item) =>
        {
            
            return (
                <div className='mx-3'>
                    <Card images = {item.images} title = {item.title} description = {item.description} />
                 </div>
            )
        } )
      } 
    </div> <br />
    
    <div className='container justify-center mx-auto flex px-5 py-7 md:flex-row  flex-col items-center'>
    {
        data4.map( (item) =>
        {
            
            return (
                <div className='mx-3'>
                    <Card images = {item.images} title = {item.title} description = {item.description} />
                 </div>
            )
        } )
      } 
    </div>
    <div className='container justify-center mx-auto flex px-5 py-7 md:flex-row  flex-col items-center'>
    {
        data5.map( (item) =>
        {
            
            return (
                <div className='mx-3'>
                    <Card images = {item.images} title = {item.title} description = {item.description} />
                 </div>
            )
        } )
      } 
    </div>
    <div className='container justify-center mx-auto flex px-5 py-7 md:flex-row  flex-col items-center'>
    {
        data6.map( (item) =>
        {
            
            return (
                <div className='mx-3'>
                    <Card images = {item.images} title = {item.title} description = {item.description} />
                 </div>
            )
        } )
      } 
    </div>
    
    </>
  )
}

export default Industry
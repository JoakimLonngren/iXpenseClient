import styles from './CategoryDiagram.module.scss'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const CategoryDiagram = ({ data }) => {

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#F77825'];

    return (
        <div className={styles.container}>
            <ResponsiveContainer width='100%' height={300}>
                <BarChart data={data}>
                    <XAxis dataKey='categoryTitle'/>
                    <YAxis/>
                    <Tooltip 
                        formatter={(value, name) => [`${value.toFixed(2)}kr`, 'Total spent']}
                        contentStyle={{borderRadius: 10}} 
                        labelStyle={{color:'#333'}} 
                        itemStyle={{color:'#333'}}
                        />
                    <Bar dataKey='totalSpent' fill='#eeeeee' >
                        {data.map((_, index) => (
                        <Cell key={index} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CategoryDiagram
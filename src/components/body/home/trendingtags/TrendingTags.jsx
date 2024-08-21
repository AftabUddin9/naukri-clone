import React from 'react'
import remoteIcon from '../../../../assets/tags/remote-icon.svg'
import engineeringIcon from '../../../../assets/tags/engineering-icon.svg'
import financeicon from '../../../../assets/tags/finance-icon.svg'
import freshersIcon from '../../../../assets/tags/freshers-icon.svg'
import hrIcon from '../../../../assets/tags/hr-icon.svg'
import internshipIcon from '../../../../assets/tags/internship-icon.svg'
import mncIcon from '../../../../assets/tags/mnc-icon.svg'
import projectManagementIcon from '../../../../assets/tags/project-management-icon.svg'
import dataScienceIcon from '../../../../assets/tags/data-science-icon.svg'
import supplyChainIcon from '../../../../assets/tags/supplychain-icon.svg'
import softwareIcon from '../../../../assets/tags/software-icon.svg'
import Tag from './Tag'

const TrendingTags = () => {
    const dataRow1 = [
        { img: remoteIcon, title: 'Remote' },
        { img: mncIcon, title: 'MNC' },
        { img: dataScienceIcon, title: 'Data Science' },
        { img: financeicon, title: 'Banking & Finance' },
        { img: internshipIcon, title: 'Internship' },
        { img: freshersIcon, title: 'Fresher' },
    ];

    const dataRow2 = [
        { img: engineeringIcon, title: 'Engineering' },
        { img: supplyChainIcon, title: 'Supply Chain' },
        { img: projectManagementIcon, title: 'Project Management' },
        { img: softwareIcon, title: 'Software & It' },
        { img: hrIcon, title: 'HR' },
    ];
    return (
        <div className='pt-5 pb-[30px]'>
            <div className='flex items-center justify-center mb-4'>
                <Tag data={dataRow1} />
            </div>
            <div className='flex items-center justify-center'>
                <Tag data={dataRow2} />
            </div>
        </div>


    )
}

export default TrendingTags
"use client"
import React, { useRef } from 'react';
import MainPagetitle from '@/layouts/MainPagetitle';
import Link from 'next/link';
import { SVGICON } from '@/constant/theme';
import TaskSummaryBlog from '@/components/dashboard/TaskSummaryBlog';
import EmployeeOffcanvas from '@/constant/EmployeeOffcanvas';

const TaskSummary = () => {
	const task = useRef();
    return (
        <>
            <MainPagetitle mainTitle="Task" pageTitle="Task" parentTitle="Home" />
            <div className="container-fluid">
				<div className="d-flex justify-content-between align-items-center mb-3">
					<h5 className="mb-0">Tasks Summary</h5>
					<div className="d-flex align-items-center">
						<div className="icon-box  icon-box-sm task-tab me-2">
							<Link href={"/task"}>
								{SVGICON.TaskList}
							</Link>
						</div>
						<Link href="#" scroll={false} className="btn btn-primary btn-sm ms-2"
							onClick={()=>task.current.showEmployeModal()}
						>+ Add Task</Link>
					</div>
				</div>
                <div className="row kanban-bx">
					<TaskSummaryBlog />
                </div>
            </div>
			<EmployeeOffcanvas 
                ref={task}
                Title="New Task"
            />

        </>
    );
};

export default TaskSummary;
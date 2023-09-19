import { Class } from "../tabs/Class";
import { Project } from "../tabs/Project";
import { Resume } from "../tabs/Resume";

export const TAB_NAMES = [
    {tabName: 'Classes', eventKey: 'classes', comp: <Class/>}, 
    {tabName: 'Projects', eventKey: 'projects', comp: <Project/>}, 
    {tabName: 'Resume', eventKey: 'resume', comp: <Resume/>}, 
    {tabName: 'Interview', eventKey: 'interview'},
    {tabName: 'Internships', eventKey: 'internships'},
    {tabName: 'Notes', eventKey: 'notes'}, 
    {tabName: 'Networking', eventKey: 'networking'},
    {tabName: 'Stories', eventKey: 'stories'},
    {tabName: 'FAQs', eventKey: 'faqs'}
];

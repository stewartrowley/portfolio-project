<template lang="">
    <section>
        <h2>Education</h2>
        <div v-for="educated in this.employmentData.education" :key="educated">
            <h3>{{educated.college}}</h3>
            <p>{{educated.degree_type}} in {{educated.degree}} with emphasis of {{educated.emphasis}}</p>
            <p>From: {{educated.start_date}} to {{educated.end_date}}</p>
            <p>Located in {{educated.location}}</p>
            <p v-for="tool in educated.tools" :key="tool">{{tool}}</p>
        </div>
    </section>
    <section>
        <h2>Professional Experience</h2>
        <div v-for="element in this.employmentData.professional_experience" :key="element">
            <h3>{{element.company}}</h3>
            <p>{{element.job_title}}</p>
            <div v-for="element in element.tasks" :key="element">
                <h4>{{element.task_name}}</h4>
                <ul v-for="element in element.task_description" :key="element">
                    <li>{{element}}</li>
                </ul>
            </div>
            <p>{{element.start_date}} to {{element.end_date}}</p>
            <p>Located: {{element.location}}</p>
        </div>
    </section>
    <section>
        <h2>Work Experience</h2>
        <div v-for="element in this.employmentData.work_experience" :key="element" >
            <h3>{{element.company}}</h3>
            <p>{{element.job_title}}</p>
            <div v-for="element in element.tasks" :key="element">
                <h4>{{element.task_name}}</h4>
                <ul v-for="element in element.task_description" :key="element">
                    <li>{{element}}</li>
                </ul>
            </div>
            <p>{{element.start_date}} to {{element.end_date}}</p>
            <p>Located: {{element.location}}</p>
        </div>
    </section>
    <section>
        <h2>Personal Experience</h2>
        <div v-for="element in this.employmentData.personal_experience" :key="element" >
            <h3>{{element.name}}</h3>
            <p>{{element.title}}</p>
            <ul v-for="element in element.tasks" :key="element">
                <li>{{element}}</li>
            </ul>
            <p>{{element.start_date}} to {{element.end_date}}</p>
            <p>Located: {{element.location}}</p>
        </div>
    </section>
    <section>
        <h2>Skills</h2>
        <div v-for="element in this.employmentData.skills" :key="element">
            <h3>{{element.skill_category}}</h3>
            <ul v-for="element in element.skill_description" :key="element">
                <li>{{element}}</li>
            </ul>
        </div>
    </section>
</template>
<script>
import EmploymentServices from '../services/EmploymentServices';
export default {
    data() {
        return {
            employmentData: ''
        }
    },
    created() {
        EmploymentServices.getEmployment()
            .then((response) => {
                console.log(response.data)
                this.employmentData = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
</script>
<style lang="">
    
</style>
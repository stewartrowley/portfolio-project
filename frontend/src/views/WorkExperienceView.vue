<template lang="">
    <div v-if="!employmentData">
        <BaseLoader />
    </div>
    <div v-if="employmentData" class="employment-wrapper">
    <div class="header-info-personal">
        <h1>{{this.employmentData.first_name}} {{this.employmentData.middle_intial}}. {{this.employmentData.last_name}}</h1>
        <p>{{this.employmentData.phone_number}} | {{this.employmentData.email}} | <span><a :href="'https://' + this.employmentData.linkedin_url">{{this.employmentData.linkedin_url}}</a></span></p>
    </div>
    <section class="education-exp">
        <hr>
        <h2>Education</h2>
        <div v-for="educated in this.employmentData.education" :key="educated">
            <h3>{{educated.college}}</h3>
            <p>{{educated.degree_type}} in {{educated.degree}} with emphasis of {{educated.emphasis}}</p>
            <p>From: {{educated.start_date}} to {{educated.end_date}}</p>
            <p>Located in {{educated.location}}</p>
            <h3>Tools Used:</h3>
            <div v-for="tool in educated.tools" :key="tool" class="employement-tools">
                <li>{{tool}}</li>
            </div>
        </div>
    </section>
    <section class="professional-exp">
        <hr>
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
    <section class="work-exp">
        <hr>
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
    <section class="personal-exp">
        <hr>
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
    <section class="skills-exp">
        <hr>
        <h2>Skills</h2>
        <div v-for="element in this.employmentData.skills" :key="element">
            <h3>{{element.skill_category}}</h3>
            <ul v-for="element in element.skill_description" :key="element">
                <li>{{element}}</li>
            </ul>
        </div>
        <a :href="this.employmentData.resume">Software Engineering Resume</a>
    </section>
    </div>
</template>
<script>
import EmploymentServices from '../services/EmploymentServices';
import BaseLoader from '../components/custom/BaseLoader.vue';
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
    },
    components: {
        BaseLoader
    }
}
</script>
<style lang="scss">
.employment-wrapper {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    background-color: var(--dark-cyan);
    font-size: 1em;
}

.education-exp, .professional-exp, .work-exp, .personal-exp, .skills-exp, .header-info-personal {
    grid-column: 2/3;
    background-color: var(--timberwolf);
    color: var(--space-cadet);
    padding: 0 5rem;
}

.header-info-personal {
    display: flex;
    flex-direction: column;
    align-items: center;

}
hr {
    height: 5px;
    background-color: var(--space-cadet);
    color: var(--space-cadet);
}

.employement-tools {
    display: flex;
    flex-direction: row;
}
</style>
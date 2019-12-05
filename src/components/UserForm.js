import React, { Component } from 'react';
import Overview1 from './Overview1';
import Overview2 from './Overview2';
import DirectComp1 from './DirectComp1';
import DirectComp2 from './DirectComp2';
import DirectComp3 from './DirectComp3';
import AnnualBonus from './AnnualBonus';
import EquityOrStock from './EquityOrStock';
import Benefits from './Benefits';
import OnboardingPay from './OnboardingPay';
import Optional from './Optional';
import Letter from './Letter';


export class UserForm extends Component {
    state = {
        step: 1,
        // DC1
        pct_slider: 0,
        //DC2
        comp_person_name: 'Alan A. Dollar',
        comp_person_email: 'test@test.com',
        //DC3
        // salary: false, add to render
        bench_salary: '',
        offer_salary: 0,
        hour_pay: '',
        hour_week: '',
        bench_hourly: 0,
        offer_hourly: 0, 
        //AB
        bench_bonus: 0,
        perform_bonus: false,
        comp_max_bonus: '',
        nhire_max_bonus: '',
        //EoS
        vest_years: 0,
        vest_rate_mos: 1,
        co_public: false,
        co_private: false,
        if_public_price: 0,
        if_public_shares: 0,
        if_private_value: 0, //option for blank
        if_unpriced: false,
        pct_share_offer: 0,
        //B
        health_insurance: false,
        dental_insurance: false,
        vision_insurance: false,
        pre_tax_spending: false,
        retirement_matching: false,
        tuition_reimbursement: false,
        childcare: false,
        wellness: false,
        lunch: false,
        student_loan_assist: false,
        other_benefit: '',
        //ROP
        onboard_assist: 0,
        //Opt
        offer_date: '11/22/19',
        nhire_first_name: 'John',
        nhire_title: 'Title',
        co_name: 'My Company',
        hman_first_name: 'Jane',
        hman_phone: '888-888-8888',
        hman_email: 'test@test.com'

    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        });
    }

    // Go Back to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
        // const originalBenchHourly = this.state.bench_hourly
        // const pctActualHourly = this.state.pct_slider * 0.01
        // const pctHourly = pctActualHourly * originalBenchHourly
        // const hourlyOffer =  Number(originalBenchHourly) + Number(pctHourly.toFixed(2))
        // if ( this.state.offer_hourly !== hourlyOffer) {
        //     this.setState({
        //         offer_hourly: hourlyOffer
        //     })
        // }
    }

    // Handle slider change
    handleSliderChange = (e, newValue) => {
        console.log(newValue);
     this.setState({ pct_slider: newValue });
     
     } 

    handleBlur = () => {
    if (this.state.pct_slider < -25) {
        this.setState({pct_slider: -25});
        } else if (this.state.pct_slider > 25) {
        this.setState({pct_slider: 25});
        }
    }

    // no dupes
    

    // Fix setState Delay
    componentDidUpdate(prevProps, prevState) {
        // Hourly
        const product = this.state.hour_pay * this.state.hour_week
        if ( this.state.bench_hourly !== product) {
            this.setState({
                bench_hourly: product
            })
        }
        const originalBenchHourly = this.state.bench_hourly
        const pctActualHourly = this.state.pct_slider * 0.01
        const pctHourly = pctActualHourly * originalBenchHourly
        const hourlyOffer =  Number(originalBenchHourly) + Number(pctHourly.toFixed(2))
        if ( this.state.offer_hourly !== hourlyOffer) {
            this.setState({
                offer_hourly: hourlyOffer
            })
        }
        // Salary
        const originalBenchSalary = this.state.bench_salary
        const pctActualSalary = this.state.pct_slider * 0.01
        const pctSalary = pctActualSalary * originalBenchSalary
        const salaryOffer =  Number(originalBenchSalary) + Number(pctSalary.toFixed(2))
        if ( this.state.offer_salary !== salaryOffer) {
            this.setState({
                offer_salary: salaryOffer
            })
        }
      }

    render() {
        const { step } = this.state
        const { pct_slider, comp_person_name, comp_person_email, bench_salary, 
        offer_salary, hour_pay, hour_week, bench_hourly, offer_hourly, bench_bonus, perform_bonus, comp_max_bonus,
        nhire_max_bonus, vest_years, vest_rate_mos, co_public, co_private, if_public_price,
        if_public_shares, if_private_value, if_unpriced, pct_share_offer, health_insurance, dental_insurance,
        vision_insurance, pre_tax_spending, retirement_matching, tuition_reimbursement,
        childcare, wellness, lunch, student_loan_assist, other_benefit, onboard_assist,
        offer_date, nhire_first_name, nhire_title, co_name, hman_first_name,
        hman_phone, hman_email
        } = this.state
        const values = { pct_slider, comp_person_name, comp_person_email, bench_salary, 
        offer_salary, hour_pay, hour_week, bench_hourly, offer_hourly, bench_bonus, perform_bonus, comp_max_bonus,
        nhire_max_bonus, vest_years, vest_rate_mos, co_public, co_private, if_public_price,
        if_public_shares, if_private_value, if_unpriced, pct_share_offer, health_insurance, dental_insurance,
        vision_insurance, pre_tax_spending, retirement_matching, tuition_reimbursement,
        childcare, wellness, lunch, student_loan_assist, other_benefit, onboard_assist,
        offer_date, nhire_first_name, nhire_title, co_name, hman_first_name,
        hman_phone, hman_email
        }

        switch(step) {
            case 1:
                return (
                    <Overview1 //Overview1
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <Overview2 //Overview2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <DirectComp1 //DC
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleSliderChange={this.handleSliderChange}
                        handleBlur={this.handleBlur}
                        values={values}
                    />
                )
            case 4:
                return (
                    <DirectComp2 //DC
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <DirectComp3 //DC
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 6:
                return (
                    <AnnualBonus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 7:
                return (
                    <EquityOrStock 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 8:
                return (
                    <Benefits 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 9:
                return (
                    <OnboardingPay
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 10:
                return (
                    <Optional
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 11:
                return (
                    <Letter 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )

            default:
                // do nothing
        }
    }
}

export default UserForm

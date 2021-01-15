import React from 'react';
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from '@testing-library/react';
import Users from './Users'
import store from "../../src/store";

afterEach(cleanup);

it('should display welcome message', () => {
    const { getByTestId, container } = render(<Provider store={store}><Users /></Provider>);
    const userPage = container.querySelector('.row')
    const welcomeMessage = getByTestId('welcome-message').textContent
    expect(welcomeMessage).toBe('Welcome to your dashboard, kindly sort through the user base')
    expect(userPage).toBeTruthy()

});

it('should test on chnage', () => {
    const buttonClick = jest.fn()
    const { getByTestId } = render(<Provider store={store}><Users /></Provider>);
    const userPage = getByTestId('users')
    fireEvent.click(userPage)

});


it('should filter by name',  () => {
    const onChange = jest.fn()
    const { getByTestId } = render(<Provider store={store}><Users /></Provider>);
    const filterInput = getByTestId('filter-input')
    console.log('filter', filterInput)
     fireEvent.change(filterInput, { target: { value: 'hd' } })

});
import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios'


beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'fetch 1' }, { name: 'fetch 2' }]
    });
});

afterEach(() => {
    moxios.uninstall();
})



it('can fetch a list of comments and display them', (done) => {
    // Attemp to render the *entire* app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click');

    // introduce a tiny little pause
    // Expect to find a list of comments 
    /* 
        setTimeout(() => {
            wrapped.update()
            expect(wrapped.find('li').length).toEqual(2);
            done();
            wrapped.unmount()
        }, 100); */

    moxios.wait(() => {
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount()
    })



})
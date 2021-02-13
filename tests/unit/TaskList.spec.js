import Vue from 'vue'
import PureTaskList from '../../src/components/PureTaskList'
import { WithPinnedTasks } from '../../src/components/PureTaskList.stories'

it('renders pinned tasks at the start of the list', () => {
    // render PureTaskList
    const Constructor = Vue.extend(PureTaskList)
    const vm = new Constructor({
        // Story's args used with our test
        propsData: WithPinnedTasks.args
    }).$mount()

    const firstTaskPinned = vm.$el.querySelector('.list-item:nth-child(1).TASK_PINNED');
    // Expect the pinned task to be rendered first, not at the end
    expect(firstTaskPinned).not.toBe(null)
})
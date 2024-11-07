import { mount } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue';

describe('TodoList.vue', () => {
  it('initialisiert die Spalten korrekt', () => {
    const wrapper = mount(TodoList, {
      props: { tasks: [] },
    });
    expect(wrapper.vm.columns).toHaveLength(5);
  });

  it('emittiert das `removeTask`-Event mit dem richtigen Index', () => {
    const wrapper = mount(TodoList, {
      props: { tasks: [{ title: 'Task 1' }] },
    });
    wrapper.vm.removeTask(0);
    expect(wrapper.emitted().removeTask[0][0]).toBe(0);
  });

  it('emittiert das `editTask`-Event mit dem richtigen Index', () => {
    const wrapper = mount(TodoList, {
      props: { tasks: [{ title: 'Task 1' }] },
    });
    wrapper.vm.editTask(0);
    expect(wrapper.emitted().editTask[0][0]).toBe(0);
  });
});

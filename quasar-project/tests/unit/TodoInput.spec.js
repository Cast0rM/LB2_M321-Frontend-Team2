import { mount } from '@vue/test-utils';
import TodoInput from '@/components/TodoInput.vue';

describe('TodoInput.vue', () => {
  it('initialisiert `newTask` als leerer String', () => {
    const wrapper = mount(TodoInput);
    expect(wrapper.vm.newTask).toBe('');
  });

  it('emittiert das `addTask`-Event und setzt `newTask` zurück', async () => {
    const wrapper = mount(TodoInput);
    await wrapper.setData({ newTask: 'Testaufgabe' });
    wrapper.vm.submitTask();

    expect(wrapper.emitted().addTask).toBeTruthy();
    expect(wrapper.emitted().addTask[0][0]).toEqual(
      expect.objectContaining({ title: 'Testaufgabe' })
    );
    expect(wrapper.vm.newTask).toBe('');
  });

  it('emittiert kein Event, wenn `newTask` leer ist', () => {
    const wrapper = mount(TodoInput);
    wrapper.vm.submitTask();
    expect(wrapper.emitted().addTask).toBeFalsy();
  });
});

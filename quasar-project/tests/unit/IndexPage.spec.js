import { mount } from '@vue/test-utils';
import IndexPage from '@/pages/IndexPage.vue';

describe('IndexPage.vue', () => {
  it('initialisiert `tasks` als leeres Array', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.vm.tasks).toEqual([]);
  });

  it('initialisiert `token` aus sessionStorage', () => {
    sessionStorage.setItem('token', 'mockToken');
    const wrapper = mount(IndexPage);
    expect(wrapper.vm.token).toBe('mockToken');
  });

  it('fügt eine neue Aufgabe zur `tasks`-Liste hinzu', async () => {
    const wrapper = mount(IndexPage);
    await wrapper.vm.addTask({ title: 'Test Task' });
    expect(wrapper.vm.tasks).toContainEqual(expect.objectContaining({ title: 'Test Task' }));
  });

  it('entfernt die Aufgabe aus `tasks`-Liste', async () => {
    const wrapper = mount(IndexPage);
    wrapper.setData({ tasks: [{ title: 'Task to Remove' }] });
    await wrapper.vm.removeTask(0);
    expect(wrapper.vm.tasks).toEqual([]);
  });
});

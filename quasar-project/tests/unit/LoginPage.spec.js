import { mount } from '@vue/test-utils';
import LoginPage from '@/pages/LoginPage.vue';
import { Notify } from 'quasar';

jest.mock('quasar', () => ({
  Notify: { create: jest.fn() },
}));

describe('LoginPage.vue', () => {
  it('zeigt eine Fehlermeldung, wenn Benutzername oder Passwort fehlen', async () => {
    const wrapper = mount(LoginPage);
    await wrapper.vm.onLogin();
    expect(Notify.create).toHaveBeenCalledWith(expect.objectContaining({ message: 'Please enter your username and password.' }));
  });

  it('setzt die Registrierungsfelder zurück', () => {
    const wrapper = mount(LoginPage);
    wrapper.setData({
      registerUsername: 'user',
      registerEmail: 'user@example.com',
      registerFirstName: 'John',
      registerLastName: 'Doe',
      registerPassword: 'password123',
    });
    wrapper.vm.resetRegisterForm();
    expect(wrapper.vm.registerUsername).toBe('');
    expect(wrapper.vm.registerEmail).toBe('');
    expect(wrapper.vm.registerFirstName).toBe('');
    expect(wrapper.vm.registerLastName).toBe('');
    expect(wrapper.vm.registerPassword).toBe('');
  });

  it('zeigt eine Fehlermeldung bei fehlendem Benutzernamen und Passwort', async () => {
    const wrapper = mount(LoginPage);
    await wrapper.vm.onLogin();
    expect(Notify.create).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Please enter your username and password.'
    }));
  });

  it('erfolgreiches Login bei gültigen Anmeldedaten', async () => {
    const mockLoginApi = jest.fn().mockResolvedValue({
      status: 200,
      data: { access_token: 'mock_token' },
    });
    LoginPage.methods.LoginApi = { post: mockLoginApi };

    const wrapper = mount(LoginPage);
    await wrapper.setData({
      username: 'validUser',
      password: 'validPassword',
    });

    await wrapper.vm.onLogin();

    expect(mockLoginApi).toHaveBeenCalled();
    expect(sessionStorage.getItem('token')).toBe('mock_token');
  });
});

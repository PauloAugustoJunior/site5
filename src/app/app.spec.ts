import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { App } from './app';

describe('Ponto de partida Nexo', () => {
  it('atualiza a recomendação e expõe o objetivo selecionado sem abrir o briefing', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    element.querySelector<HTMLButtonElement>('[data-goal="data"]')!.click();
    await fixture.whenStable();
    expect(element.querySelector('.recommendation h3')?.textContent).toContain(
      'Dados e Business Intelligence',
    );
    expect(element.querySelector('[data-goal="data"]')?.getAttribute('aria-pressed')).toBe('true');
    expect(element.querySelector('[data-goal="operation"]')?.getAttribute('aria-pressed')).toBe(
      'false',
    );
    expect(element.querySelector('dialog')?.open).toBe(false);
  });

  it('muda a direção da operação conforme a estrutura existente', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    const select = element.querySelector<HTMLSelectElement>('#situation')!;
    select.value = 'beginning';
    select.dispatchEvent(new Event('change'));
    await fixture.whenStable();
    expect(element.querySelector('.recommendation h3')?.textContent).toContain(
      'Software e aplicativos',
    );
    expect(element.querySelector('.recommendation p')?.textContent).toContain('entrega inicial');
    select.value = 'existing';
    select.dispatchEvent(new Event('change'));
    await fixture.whenStable();
    expect(element.querySelector('.recommendation h3')?.textContent).toContain(
      'Automações e integrações',
    );
    expect(element.querySelector('.recommendation p')?.textContent).toContain(
      'o que funciona hoje',
    );
  });

  it('leva a recomendação atual para o briefing', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const open = vi.spyOn(fixture.componentInstance.dialog(), 'open').mockImplementation(() => {});
    const element = fixture.nativeElement as HTMLElement;
    element.querySelector<HTMLButtonElement>('[data-goal="support"]')!.click();
    await fixture.whenStable();
    element.querySelector<HTMLButtonElement>('[data-action="recommended-brief"]')!.click();
    expect(open).toHaveBeenCalledWith('IA e chatbots');
  });

  it('permite consultar os entregáveis e recolher o detalhe de uma solução', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    const toggle = element.querySelectorAll<HTMLButtonElement>('.solution-toggle')[2];
    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(element.querySelector('#detail-data')?.textContent).toContain(
      'Pipelines e modelagem de dados',
    );
    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(element.querySelector('#detail-data .solution-detail')).toBeNull();
  });
});

import {inject, Injectable, Renderer2, RendererFactory2, signal} from '@angular/core';
import {AmtTheme, AmtThemeColor, AmtThemeDirection, AmtThemeMode} from '../interfaces/amt-theme.inteface';
import {StorageService} from './storage.service';
import {Directionality} from '@angular/cdk/bidi';

@Injectable({
  providedIn: 'root'
})
export class AmtThemeService {
  public settings = signal<AmtTheme>({
    mode: 'dark',
    color: 'base',
    direction: 'ltr',
    logo: '',
    navbarResponsive: true,
    navbarColors: true,
    navbarFullscreen: true,
    navbarTheme: true,
    navbarNotifications: true,
    navbarLanguages: true,
    navbarProfile: true
  });
  private storage = inject(StorageService);
  private dir = inject(Directionality);
  private renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);

  constructor() {
    this.loadDefaults();
  }

  set title(title: string) {
    this.settings.update((settings) => {
      settings.title = title;
      return settings;
    });
  }

  get title(): string {
    return this.settings().title || '';
  }

  set logo(logo: string) {
    this.settings.update((settings) => {
      settings.logo = logo;
      return settings;
    });
  }

  get logo(): string {
    return this.settings().logo || '';
  }

  set direction(direction: AmtThemeDirection) {
    this.settings.update((settings) => {
      settings.direction = direction;
      return settings;
    });
  }

  get direction(): string {
    return this.settings().direction || 'ltr';
  }

  set mode(mode: AmtThemeMode) {
    if (mode == 'system') {
      mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    this.storage.set('mode', mode);
    this.settings().mode = mode;
    this.updateHtmlClass(mode);
  }

  get mode(): string {
    return this.settings().mode || '';
  }

  toggleMode(): void {
    this.mode = this.mode === 'dark' ? 'light' : 'dark';
  }

  set color(color: AmtThemeColor) {
    this.storage.set('color', color);
    this.settings().color = color;
    this.updateHtmlAttribute('data-theme', color);
  }

  get color(): string {
    return this.settings().color || '';
  }

  set navbarResponsive(show: boolean) {
    this.settings.update((settings) => {
      settings.navbarResponsive = show;
      return settings;
    });
  }

  get navbarResponsive() {
    return this.settings().navbarResponsive;
  }

  set navbarColors(show: boolean) {
    this.settings.update((settings) => {
      settings.navbarColors = show;
      return settings;
    });
  }

  get navbarColors() {
    return this.settings().navbarColors;
  }

  set navbarFullscreen(show: boolean) {
    this.settings.update((settings) => {
      settings.navbarFullscreen = show;
      return settings;
    });
  }

  get navbarFullscreen() {
    return this.settings().navbarFullscreen;
  }

  set navbarTheme(show: boolean) {
    this.settings.update((settings) => {
      settings.navbarTheme = show;
      return settings;
    });
  }

  get navbarTheme() {
    return this.settings().navbarTheme;
  }

  set navbarNotifications(show: boolean) {
    this.settings.update((settings) => {
      settings.navbarNotifications = show;
      return settings;
    });
  }

  get navbarNotifications() {
    return this.settings().navbarNotifications;
  }

  set navbarLanguages(show: boolean) {
    this.settings.update((settings) => {
      settings.navbarLanguages = show;
      return settings;
    });
  }

  get navbarLanguages() {
    return this.settings().navbarLanguages;
  }

  set navbarProfile(show: boolean) {
    this.settings.update((settings) => {
      settings.navbarProfile = show;
      return settings;
    });
  }

  get navbarProfile() {
    return this.settings().navbarProfile;
  }

  private loadDefaults() {
    this.direction  = this.dir.value;
    this.mode       = this.storage.get('mode') || 'system';
    this.color      = this.storage.get('color') || 'base';
  }

  private updateHtmlClass(className: string): void {
    const html = document.documentElement;
    this.renderer.setAttribute(html, 'class', className);
  }

  private updateHtmlAttribute(attribute: string, value: string): void {
    const html = document.documentElement;
    this.renderer.setAttribute(html, attribute, value);
  }
}

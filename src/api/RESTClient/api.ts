import RESTClient from './RESTClient';
import * as routes from './routes';

// Функція для зв'язування всіх API з клієнтом
export const bindAllApi = (thisArg: RESTClient) => {
  return {
    // Об'єкт для роботи з аутентифікацією
    auth: {
      login: routes.auth.login.bind(thisArg), // Логін
      refresh: routes.auth.tokenRefresh.bind(thisArg), // Оновлення токену.
      verify: routes.auth.tokenVerify.bind(thisArg), // Перевірка токену.
      logout: routes.auth.logout.bind(thisArg), // Вихід з системи.
      passwordReset: routes.auth.passwordReset.bind(thisArg), // Скидання паролю користувача.
      passwordResetConfirm: routes.auth.passwordResetConfirm.bind(thisArg), // Підтвердження скидання паролю.
    },
    // Об'єкт для роботи з туристами
    tourists: {
      register: routes.tourists.registerTourist.bind(thisArg), // Реєстрація туриста.
      activate: routes.tourists.activationTourist.bind(thisArg), // Активація туриста.
      deactivate: routes.tourists.deactivationTourist.bind(thisArg), // Деактивація туриста.
      activateByToken: routes.tourists.activationTouristByToken.bind(thisArg), // Активація туриста за його токеном.
      getAll: routes.tourists.getAllTourists.bind(thisArg), // Отримання всіх туристів.
      getById: routes.tourists.getTouristById.bind(thisArg), // Отримання туриста по ID.
      put: routes.tourists.putTourist.bind(thisArg), // Оновлення туриста.
      patch: routes.tourists.patchTourist.bind(thisArg), // Оновлення частини туриста.
    },
    // Об'єкт для роботи з Таблетоком
    Pills: {
      getAll: routes.Pills.getAllPills.bind(thisArg), // Отримання всіх Таблетоків.
      getById: routes.Pills.getPillById.bind(thisArg), // Отримання Таблетока по ID.
      delete: routes.Pills.deletePill.bind(thisArg), // Видалення Таблетока.
      register: routes.Pills.registerPill.bind(thisArg), // Реєстрація Таблетока.

      put: routes.Pills.putPill.bind(thisArg), // Оновлення Таблетока.
      putActivate: routes.Pills.putPillActivation.bind(thisArg), // Активація Таблетока.
      putApproved: routes.Pills.putPillApproval.bind(thisArg), // Схвалення Таблетока.
      putDraft: routes.Pills.putPillDraft.bind(thisArg), // Збереження Таблетока як чернетки.
      putImages: routes.Pills.putPillImages.bind(thisArg), // Оновлення зображень.
      putPremiumLevel: routes.Pills.putPillPremiumLevel.bind(thisArg), // Зміна рівня преміум-статусу.
      putPriority: routes.Pills.putPillPriority.bind(thisArg), // Зміна пріоритетності.
      putRating: routes.Pills.putPillRating.bind(thisArg), // Оновлення рейтингу.
      putVerified: routes.Pills.putPillVerification.bind(thisArg), // Верифікація Таблетока.
      putVisibility: routes.Pills.putPillVisibility.bind(thisArg), // Приховування Таблетока.

      patch: routes.Pills.patchPill.bind(thisArg), // Оновлення частини Таблетока.
      patchActivate: routes.Pills.patchPillActivation.bind(thisArg), // Активація Таблетока.
      patchApproved: routes.Pills.patchPillApproval.bind(thisArg), // Схвалення Таблетока.
      patchDraft: routes.Pills.patchPillDraft.bind(thisArg), // Збереження Таблетока як чернетки.
      patchImages: routes.Pills.patchPillImages.bind(thisArg), // Оновлення зображень.
      patchPremiumLevel: routes.Pills.patchPillPremiumLevel.bind(thisArg), // Зміна рівня преміум-статусу.
      patchPriority: routes.Pills.patchPillPriority.bind(thisArg), // Зміна пріоритетності.
      patchRating: routes.Pills.patchPillRating.bind(thisArg), // Оновлення рейтингу.
      patchVerified: routes.Pills.patchPillVerification.bind(thisArg), // Верифікація Таблетока.
      patchVisibility: routes.Pills.patchPillVisibility.bind(thisArg), // Приховування Таблетока.
    },
    // Об'єкт для роботи з подіями
    eventlogs: {
      getAll: routes.eventlogs.getAllEventLogs.bind(thisArg), // Отримання всіх подій.
      getById: routes.eventlogs.getEventLogById.bind(thisArg), // Отримання події по ID.
    },
    // Об'єкт для роботи з Менеджером
    managers: {
      getById: routes.managers.getManagerById.bind(thisArg), // Отримання Менеджера по ID.
      getAll: routes.managers.getAllManagers.bind(thisArg), // Отримання всіх Менеджерів.
      register: routes.managers.registerManager.bind(thisArg), // Реєстрація Менеджера.
      activate: routes.managers.activationManager.bind(thisArg), // Активація Менеджера.
      deactivate: routes.managers.deactivationManager.bind(thisArg), // Деактивація Менеджера.
      put: routes.managers.putManager.bind(thisArg), // Оновлення Менеджера.
      patch: routes.managers.patchManager.bind(thisArg), // Оновлення частини Менеджера.
    },
    // Об'єкт для роботи з Адміністратором
    administrators: {
      register: routes.administrators.registerAdministrator.bind(thisArg), // Реєстрація Адміністратора
      getById: routes.administrators.getAdministratorById.bind(thisArg), // Отримання Адміністратора по ID.
      getAll: routes.administrators.getAllAdministrators.bind(thisArg), // Отримання всіх Адміністраторів.
      activate: routes.administrators.activationAdministrator.bind(thisArg), // Активація Адміністратора.
      deactivate: routes.administrators.deactivationAdministrator.bind(thisArg), // Деактивація Адміністратора.
      put: routes.administrators.putAdministrator.bind(thisArg), // Оновлення Адміністратора.
      patch: routes.administrators.patchAdministrator.bind(thisArg), // Оновлення частини Адміністратора.
    },
    // Об'єкт для роботи з Категоріями
    categories: {
      getById: routes.categories.getCategoryById.bind(thisArg), // Отримання Категорії по ID.
      getAll: routes.categories.getAllCategories.bind(thisArg), // Отримання всіх Категорій.
      create: routes.categories.createCategory.bind(thisArg), // Створення Категорії.
      put: routes.categories.putCategory.bind(thisArg), // Оновлення Категорії.
      patch: routes.categories.patchCategory.bind(thisArg), // Оновлення частини Категорії.
      delete: routes.categories.deleteCategory.bind(thisArg), // Видалення Категорії.

      Pills: {
        getAll: routes.categories.pills.getAllPillsByCategoryId.bind(thisArg), // Отримання всіх Таблетоків з Категорії по ID Категорії.
        getById: routes.categories.pills.getPillByCategoryId.bind(thisArg), // Отримання Таблетока з Категорії по ID Категорії та по ID Таблетока.
      },
    },
  };
};

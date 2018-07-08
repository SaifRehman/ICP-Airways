import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations';

export const flightTrigger = trigger('flightsList', [
  transition('* => *', [
    query('.flight-info', style({ opacity: 0 }), { optional: true }),

    query(
      '.flight-info',
      stagger('100ms', [
        animate(
          '1s ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-70px)', offset: 0 }),
            style({
              opacity: 0.5,
              transform: 'translateY(35px)',
              offset: 0.3
            }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ]),
      { optional: true }
    )
  ])
]);

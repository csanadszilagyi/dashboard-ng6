import {
    trigger,
    animate,
    transition,
    style,
    query,
    state,
    group
} from '@angular/animations';

export const scaleAnimation =   trigger('scaleAnimation', [
    state('false', style({
      transform: 'scale(1)'
    })),
    state('true', style({
      transform: 'scale(1.2)'
    })),
    transition('false => true', animate('200ms ease-in')),
    transition('true => false', animate('200ms ease-out'))
]);

/*
export const routerTransition = trigger('routerTransition', [
    // The '* => *' will trigger the animation to change between any two states
    transition('* => *', [
        // The query function has three params.
        // First is the event, so this will apply on entering or when the element is added to the DOM.
        // Second is a list of styles or animations to apply.
        // Third we add a config object with optional set to true, this is to signal
        // angular that the animation may not apply as it may or may not be in the DOM.
        query(':enter',
            [
                style({ opacity: 0 })
            ],
            { optional: true }
        ),
        query(':enter',
        [
            style({ opacity: 0 }),
            animate('0.2s', style({ opacity: 1 }))
        ],
        { optional: true }
        ),
        query(':leave',
            [
                style({ opacity: 1 }),
                animate('0.2s', style({ opacity: 0 }))
            ],
            { optional: true }
        ),

    ])
]);
*/

/*
export const routerTransition = trigger('routerTransition', [
transition('* => *', [
    query(
      ':enter',
      [style({ position: 'fixed', width: '100%'})],
      { optional: true }
    ),
    query(
      ':leave',
       [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);
*/

/*
export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
      // order
// 1.
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })
        , { optional: true }),
// 2.
        group([  // block executes in parallel
            query(':enter', [
            style({ opacity: 0 }),
            animate('0.25s ease-in-out', style({ opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
            style({ opacity: 1 }),
            animate('0.25s ease-in-out', style({ opacity: 0 }))
            ], { optional: true })
        ])
    ])
]);
*/


export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
      // order
      // 1
      query(':enter, :leave', style({ position: 'absolute', width: '100%' })
        , { optional: true }),
      // 2
     group([  // block executes in parallel
            query(':enter', [
            style({ opacity: 0, transform: 'translateX(50%)' }),
            animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
            style({ opacity: 1, transform: 'translateX(0%)' }),
            animate('0.25s ease-in-out', style({ opacity: 0, transform: 'translateX(-50%)' }))
            ], { optional: true })
        ])
    ])
]);


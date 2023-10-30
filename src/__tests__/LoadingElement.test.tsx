import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/renderTestsWithProvider';
import LoadingElement from '@/components/LoadingElement';

describe('LoadingElement tests', () => {
    const loadingTitle = 'Some loading title...';

    test('LoadingElement without title', async () => {
        renderWithProviders(<LoadingElement title={loadingTitle} />);

        expect(
            await screen.findByRole('heading', { name: loadingTitle })
        ).toBeVisible();
        expect(await screen.findByLabelText('loading')).toBeVisible();
    }),
        test('LoadingElement without title', async () => {
            renderWithProviders(<LoadingElement />);

            expect(
                screen.queryByRole('heading', {
                    name: loadingTitle,
                })
            ).not.toBeInTheDocument();
            expect(await screen.findByLabelText('loading')).toBeVisible();
        });
});

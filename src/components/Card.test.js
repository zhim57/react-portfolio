import { render, screen } from '@testing-library/react';
import Card from './Card';

const mockProps = {
    title: 'Test Project',
    description: 'A test project description',
    imageUrl: '/test-image.jpg',
    projectUrl: 'https://example.com/project',
    githubUrl: 'https://github.com/test/repo',
    linkText: 'View Live Demo'
};

describe('Card Component', () => {
    test('renders project title', () => {
        render(<Card {...mockProps} />);
        expect(screen.getByText('Test Project')).toBeInTheDocument();
    });

    test('renders project description in tooltip', () => {
        render(<Card {...mockProps} />);
        expect(screen.getByText('A test project description')).toBeInTheDocument();
    });

    test('renders project image with correct alt text', () => {
        render(<Card {...mockProps} />);
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', '/test-image.jpg');
        expect(image).toHaveAttribute('alt', 'Test Project');
    });

    test('renders project link with correct href', () => {
        render(<Card {...mockProps} />);
        const projectLink = screen.getByText('View Live Demo');
        expect(projectLink).toHaveAttribute('href', 'https://example.com/project');
    });

    test('renders github link with correct href', () => {
        render(<Card {...mockProps} />);
        const githubLink = screen.getByText('View Code');
        expect(githubLink).toHaveAttribute('href', 'https://github.com/test/repo');
    });

    test('has proper accessibility labels', () => {
        render(<Card {...mockProps} />);
        expect(screen.getByLabelText('View Test Project live demo')).toBeInTheDocument();
        expect(screen.getByLabelText('View Test Project source code on GitHub')).toBeInTheDocument();
    });

    test('links open in new tab', () => {
        render(<Card {...mockProps} />);
        const links = screen.getAllByRole('link');
        links.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noreferrer');
        });
    });
});
